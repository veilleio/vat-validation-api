#!/usr/bin/env bash
# VAT Validation API – cURL example
# Usage: VEILLE_API_KEY=your-key bash vat.sh
set -euo pipefail

curl -sS --fail-with-body -G "https://api.veille.io/v1/vat" \
  -H "x-api-key: ${VEILLE_API_KEY}" \
  --data-urlencode query=FR40303265045
