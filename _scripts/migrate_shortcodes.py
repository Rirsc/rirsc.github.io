import os
import re
from pathlib import Path

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        text = f.read()

    # First, handle inline self-closing-like ones
    text = re.sub(r'<div\s+class="separator"\s*>\s*</div>', '{{< separator >}}', text)
    text = re.sub(r'<div\s+class="separator-small"\s*>\s*</div>', '{{< separator-small >}}', text)
    text = re.sub(r'<div\s+class="column\s+column-([a-zA-Z0-9\s-]+?)"\s*>\s*</div>', r'{{< col \1 >}}{{< /col >}}', text)

    # We find all <div ...> and </div>
    pattern = re.compile(r'(<div[^>]*>|</div>)')
    stack = []
    
    out_text = ""
    last_idx = 0
    for match in pattern.finditer(text):
        out_text += text[last_idx:match.start()]
        last_idx = match.end()
        
        token = match.group(0)
        if token.startswith('<div'):
            # It's an open div
            if 'class="grid-layout"' in token:
                out_text += '{{% grid %}}'
                stack.append('grid')
            elif 'class="project-text"' in token:
                out_text += '{{% project-text %}}'
                stack.append('project-text')
            elif 'class="project-credits"' in token:
                out_text += '{{% project-credits %}}'
                stack.append('project-credits')
            elif 'class="work-history"' in token:
                out_text += '{{% work-history %}}'
                stack.append('work-history')
            elif 'style="display: flex; justify-content: center;"' in token:
                out_text += '{{% flex-center %}}'
                stack.append('flex-center')
            else:
                col_match = re.search(r'class="column\s+column-([^"]+)"', token)
                if col_match:
                    out_text += f'{{{{% col {col_match.group(1).strip()} %}}}}'
                    stack.append('col')
                else:
                    out_text += token
                    stack.append('other')
        elif token == '</div>':
            if stack:
                tag = stack.pop()
                if tag != 'other':
                    out_text += f'{{{{% /{tag} %}}}}'
                else:
                    out_text += '</div>'
            else:
                # Unmatched div? just output it
                out_text += '</div>'
                
    out_text += text[last_idx:]
    
    while stack:
        tag = stack.pop()
        if tag != 'other':
            if not out_text.endswith('\n'):
                out_text += '\n'
            out_text += f'{{{{% /{tag} %}}}}'
        else:
            out_text += '</div>'
            
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(out_text)

if __name__ == "__main__":
    content_dir = Path(r"d:\Vault\Workos\RIRSC_Rirsc\RIRSC_240411_Rirsc Web\rirsc.github.io\content")
    for root, dirs, files in os.walk(content_dir):
        for file in files:
            if file.endswith(".md"):
                process_file(os.path.join(root, file))
    print("Migration complete!")
