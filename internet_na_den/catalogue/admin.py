from django.contrib import admin

from catalogue.models import SignalCoverage


class SignalCoverageAdmin(admin.ModelAdmin):
    list_display = (
        'site_name',
        'site_lat',
        'site_lon',
        'site_status',
        'cpe_cell',
        'cpe_imei',
        'cpe_imsi',
        'cpe_lat',
        'cpe_lon',
        'cpe_status'
    )

admin.site.register(SignalCoverage, SignalCoverageAdmin)
