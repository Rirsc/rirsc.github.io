import os
import re
from pathlib import Path

def main():
    content_dir = Path(r"d:\Vault\Workos\RIRSC_Rirsc\RIRSC_240411_Rirsc Web\rirsc.github.io\content")
    
    modified_count = 0
    for root, _, files in os.walk(content_dir):
        for file in files:
            if file.endswith('.md'):
                filepath = os.path.join(root, file)
                
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                if 'heroImage:' in content:
                    new_content = re.sub(r'^\s*heroImage:.*$\n?', '', content, flags=re.MULTILINE)
                    
                    if new_content != content:
                        with open(filepath, 'w', encoding='utf-8') as f:
                            f.write(new_content)
                        modified_count += 1
                        print(f"Removed heroImage from: {filepath}")

    print(f"\nDone! Removed heroImage from {modified_count} files.")

if __name__ == "__main__":
    main()
