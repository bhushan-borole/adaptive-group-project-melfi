import pandas as pd
import json

df = pd.read_csv('data.csv')
df = df.set_index('unique_id')

data = {'data': {}}
cols = df.columns



for idx, row in df.iterrows():
    data['data'][idx] = {}
    for col in cols:
        data['data'][idx][col] = int(row[col])

d = json.dumps(data, indent=4)

with open('data_format2.json', 'w') as f:
    f.write(d)
