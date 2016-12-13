from django.db import models


class SignalCoverage(models.Model):
    site_name = models.CharField(max_length=50)
    site_lat = models.FloatField(default=20.0)
    site_lon = models.FloatField(default=48.0)
    site_status = models.CharField(max_length=20)
    cpe_cell = models.CharField(max_length=50)
    cpe_imei = models.IntegerField()
    cpe_imsi = models.IntegerField()
    cpe_lat = models.FloatField(default=20.0)
    cpe_lon = models.FloatField(default=48.0)
    cpe_status = models.CharField(max_length=20)
