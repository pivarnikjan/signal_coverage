from django.db import models


class SignalCoverage(models.Model):
    STATUSES = (
        ('Up', 'UP'),
        ('Down', 'DOWN'),
    )

    site_name = models.CharField(max_length=50)
    site_lat = models.DecimalField(default=48.0, max_digits=12, decimal_places=9)
    site_lon = models.DecimalField(default=20.0, max_digits=12, decimal_places=9)
    site_status = models.CharField(max_length=4, choices=STATUSES)
    cpe_cell = models.CharField(max_length=50)
    cpe_imei = models.IntegerField(max_length=15)
    cpe_imsi = models.IntegerField(max_length=15)
    cpe_lat = models.DecimalField(default=48.0, max_digits=12, decimal_places=9)
    cpe_lon = models.DecimalField(default=20.0, max_digits=12, decimal_places=9)
    cpe_status = models.CharField(max_length=4, choices=STATUSES)
