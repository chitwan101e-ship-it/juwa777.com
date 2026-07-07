"""Build public giveaway-winners.json from selected_500_winners.xlsx (no emails)."""
import json
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
        winners.append({"account": account, "id": user_id})

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
