#!/bin/bash

set -e

contest=$1
if [ -z "$contest" ]; then
  echo "Usage: $0 <contest>"
  exit 1
fi

script_dir=$(cd "$(dirname "$0")" && pwd)
target_dir="$script_dir/../$contest"

if [ -d "$target_dir" ]; then
  echo "Directory $target_dir already exists."
  exit 1
fi

mkdir -p "$target_dir"
cd "$target_dir"

mkdir -p .vscode
cat <<-EOF > .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "github.copilot.enable": {
    "*": false
  }
}
EOF

cat <<-EOF >> .editorconfig
root = true

[*]
end_of_line = lf
charset = utf-8
insert_final_newline = true

[*.js]
indent_style = space
indent_size = 2
quote_type = single
max_line_length = 120
EOF

cat <<-EOF > a.js
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
EOF
