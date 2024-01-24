from django.db import models

# Create your models here.

class srv (models.Model):
    Monto = models.CharField(max_length=50)
    Tel_act = models.CharField(max_length=50)
    Fc_activacion = models.DateField() 
    Fc_estado = models.DateField()
    Last_update = models.DateField()
    Puntos = models.PositiveSmallIntegerField()

    class Meta:
        db_table = 'srv'
