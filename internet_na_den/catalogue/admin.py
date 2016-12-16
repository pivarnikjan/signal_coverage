from django.contrib import admin

from import_export import resources
from import_export.admin import ImportExportModelAdmin

from catalogue.models import SignalCoverage


class SignalCoverageResources(resources.ModelResource):
    class Meta:
        model = SignalCoverage


class SignalCoverageIEAdmin(ImportExportModelAdmin):
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
        'cpe_status',
    )
    resource_class = SignalCoverageResources
    pass


admin.site.register(SignalCoverage, SignalCoverageIEAdmin)
