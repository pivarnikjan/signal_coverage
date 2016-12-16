import logging
from django.shortcuts import render

from .models import SignalCoverage
from .forms import SignalCoverageForm


_logger = logging.getLogger(__name__)


def index(request):
    queryset = SignalCoverage.objects.order_by()
    context = {
        "object_list": queryset
    }
    print queryset
    # for item in queryset:
    #     print item
    return render(request, 'index.html', context)


def post_new(request):
    form = SignalCoverageForm()

    return render(request, 'post_edit.html', {'form': form})
