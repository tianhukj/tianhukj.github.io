# Trea中MCP的配置
## Neon
```
{
  "mcpServers": {
    "neon": {
      "command": "npx",
      "args": [
        "-y",
        "@neondatabase/mcp-server-neon",
        "start",
        "YOUR_NEON_API_KEY"
      ]
    }
  }
}
```


## Supabase
```
{
  "mcpServers": {
    "supabase": {
      "command": "npx",
      "args": [
        "y",
        "@joshuarileydev/supabase-mcp-server"
      ],
      "env": {
        "SUPABASE_API_KEY": "API_KEY_HERE"
      }
    }
  }
}
```

## Figma
```
{
  "mcpServers": {
    "Framelink MCP for Figma": {
      "command": "npx",
      "args": ["-y", "figma-developer-mcp", "--figma-api-key=YOUR-KEY", "--stdio"]
    }
  }
}
```

## context7
```
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp", "--api-key", "YOUR_API_KEY"]
    }
  }
}
```

## chrome devtools
```
{
  "mcpServers": {
    "chrome-devtools": {
      "command": "npx",
      "args": ["-y", "chrome-devtools-mcp@latest"]
    }
  }
}
```


