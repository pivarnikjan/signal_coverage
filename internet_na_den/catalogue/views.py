from django.shortcuts import render
from .forms import SignalCoverageForm


def index(request):
    return render(request, 'index.html')


def post_new(request):
    form = SignalCoverageForm()
    return render(request, 'post_edit.html', {'form': form})
