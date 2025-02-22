import csv

# Data to write into CSV
data = [
    ["College UID", "Password"],  # Header row
    ["2024KUCP1115", "advikk"],
    ["2024KUCP1116","pearll"],
    ["2024KUAD3031","soumill"],
    ["2024KUCP1140","advittt"],
    ["2024KUCP1156","aviralll"],
]

# Writing to the CSV file
with open('data.csv', mode='w', newline='') as file:
    writer = csv.writer(file)
    writer.writerows(data)
