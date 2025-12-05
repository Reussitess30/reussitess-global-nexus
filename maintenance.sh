#!/bin/bash
vercel --prod --force && echo "✅ Cache purgé $(date)"
