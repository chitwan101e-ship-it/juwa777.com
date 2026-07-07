"""Build private giveaway-winner-registry.json from selected_500_winners.xlsx (includes emails — never publish)."""
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
OUT = ROOT / "data" / "giveaway-winner-registry.json"


def main() -> None:
    if not XLSX.is_file():
        print(f"Missing source file: {XLSX}", file=sys.stderr)
        sys.exit(1)

    OUT.parent.mkdir(parents=True, exist_ok=True)

    wb = openpyxl.load_workbook(XLSX, read_only=True, data_only=True)
    ws = wb.active
    winners = []
    seen = set()

    for row in ws.iter_rows(min_row=2, values_only=True):
        if not row or not row[0]:
            continue
        account = str(row[0]).strip()
        if not account:
            continue
        user_id = str(int(row[1]))
        email = str(row[3] or "").strip().lower()
        if not email or "@" not in email:
            continue
        key = (account.lower(), user_id, email)
        if key in seen:
            continue
        seen.add(key)
        winners.append({"account": account, "id": user_id, "email": email})

    wb.close()

    payload = {"winnerCount": len(winners), "winners": winners}
    OUT.write_text(json.dumps(payload, separators=(",", ":")), encoding="utf-8")
    print(f"Wrote {len(winners)} private winner records to {OUT}")
    print("For Vercel: set GIVEAWAY_WINNER_REGISTRY_JSON to the file contents (Dashboard -> Settings -> Environment Variables).")


if __name__ == "__main__":
    main()
