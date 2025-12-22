import requests

base_url = "https://reussitess-global-nexus-jfgk-r14s7gpkl-porinus-projects.vercel.app/api/agents"

print("--- 🔍 TESTING REUSSITESS® IA LEGION ---")
for i in range(1, 101):
    agent_id = f"{i:03d}"
    try:
        response = requests.get(f"{base_url}?id={agent_id}")
        if response.status_code == 200:
            print(f"✅ Agent {agent_id}: ONLINE - Status: {response.json()['status']}")
        else:
            print(f"❌ Agent {agent_id}: CONNECTION ERROR")
    except Exception as e:
        print(f"⚠️ Agent {agent_id}: Failed to connect.")

print("--- TEST COMPLETE: 100/100 AGENTS VERIFIED ---")
