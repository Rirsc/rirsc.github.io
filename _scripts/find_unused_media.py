import os
import re
from pathlib import Path

def main():
    repo_root = Path(r"d:\Vault\Workos\RIRSC_Rirsc\RIRSC_240411_Rirsc Web\rirsc.github.io")
    images_dir = repo_root / "content" / "images"
    videos_dir = repo_root / "content" / "videos"
    
    # Collect all text content from md and layout files
    all_text = ""
    for root, _, files in os.walk(repo_root):
        for f in files:
            if f.endswith(('.md', '.html', '.toml', '.json', '.yaml', '.js', '.scss', '.css')):
                try:
                    with open(os.path.join(root, f), 'r', encoding='utf-8') as file:
                        all_text += file.read() + "\n"
                except Exception:
                    pass

    unused_files = []
    
    # Check images
    for root, _, files in os.walk(images_dir):
        for f in files:
            filepath = os.path.join(root, f)
            if f not in all_text:
                unused_files.append(filepath)
                
    # Check videos
    for root, _, files in os.walk(videos_dir):
        for f in files:
            filepath = os.path.join(root, f)
            if f not in all_text:
                unused_files.append(filepath)

    print(f"Found {len(unused_files)} unused media files:")
    for uf in unused_files:
        print(uf)

if __name__ == "__main__":
    main()
