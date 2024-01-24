import os
import types

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Proyecto1.settings')

#select * from servicios

query = usuarios.objects.all()
print(query)