import logging
from django.shortcuts import render

from .models import SignalCoverage
from .forms import SignalCoverageForm


_logger = logging.getLogger(__name__)


def index(request):
    queryset = SignalCoverage.objects.all()
    context = {
        "object_list": queryset
    }
    return render(request, 'index.html', context)


def post_new(request):
    form = SignalCoverageForm()

    return render(request, 'post_edit.html', {'form': form})
