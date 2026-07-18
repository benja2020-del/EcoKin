import json, urllib.request
url = "https://eco-kinshasa-api.onrender.com/openapi.json"
with urllib.request.urlopen(url, timeout=30) as r:
    data = json.load(r)
schema = data["paths"]["/api/incidents/"]["post"]["requestBody"]["content"]["multipart/form-data"]["schema"]
print(json.dumps(schema, indent=2, ensure_ascii=False))
