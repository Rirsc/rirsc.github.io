---
title: "{{ replace (replace .Name "-" " ") "_" " " | title }}"
date: {{ now.Format "2006-01-02" }}
tags:
  - tag1
  - tag2
  - tag3
---
