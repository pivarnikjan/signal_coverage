from django import forms
from .models import SignalCoverage


class SignalCoverageForm(forms.ModelForm):

    class Meta:
        model = SignalCoverage
        fields = (
            'site_name',
            'site_lat',
            'site_lon',
            'cpe_lat',
            'cpe_lon'
        )
