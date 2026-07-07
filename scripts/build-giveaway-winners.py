"""Build public giveaway-winners.json from selected_500_winners.xlsx (no emails).

For privacy, only a masked display name (first name + last initial, e.g. "Katie N.")
is published. Full names are never written to the public file. Account username and
user ID are still included solely so the client-side "check if you won" tool works;
they are not shown in the public transparency list.
"""
import json
import re
import sys
from pathlib import Path

try:
    import openpyxl
except ImportError:
    print("Install openpyxl: pip install openpyxl", file=sys.stderr)
    sys.exit(1)

ROOT = Path(__file__).resolve().parents[1]
XLSX = ROOT / "data" / "selected_500_winners.xlsx"
OUT = ROOT / "public" / "giveaway-winners.json"

PRIZE_DESCRIPTION = "$500 worth of Bitcoin"


def mask_name(raw: str) -> str:
    """Return a privacy-safe display name: first name + last initial."""
    letters_only = re.sub(r"[^A-Za-z\s]", " ", str(raw or ""))
    parts = [p for p in letters_only.split() if p]
    if not parts:
        return ""
    first = parts[0].capitalize()
    if len(parts) >= 2:
        return f"{first} {parts[1][0].upper()}."
    return first


def main() -> None:
    if not XLSX.is_file():
        print(f"Missing source file: {XLSX}", file=sys.stderr)
        sys.exit(1)

    wb = openpyxl.load_workbook(XLSX, read_only=True, data_only=True)
    ws = wb.active
    winners = []
    seen_accounts = set()

    for row in ws.iter_rows(min_row=2, values_only=True):
        if not row or not row[0]:
            continue
        account = str(row[0]).strip()
        if not account:
            continue
        user_id = str(int(row[1]))
        key = account.lower()
        if key in seen_accounts:
            continue
        seen_accounts.add(key)
        raw_name = row[5] if len(row) > 5 else ""
        name = mask_name(raw_name) or "Winner"
        winners.append({"account": account, "id": user_id, "name": name})

    wb.close()

    payload = {
        "publishedAt": "2026-07-06",
        "winnerCount": len(winners),
        "prizeDescription": PRIZE_DESCRIPTION,
        "winners": winners,
    }

    OUT.write_text(json.dumps(payload, separators=(",", ":")), encoding="utf-8")
    print(f"Wrote {len(winners)} winners to {OUT}")


if __name__ == "__main__":
    main()
