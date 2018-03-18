from django import forms

from . models import MapSettings


class DataMappingForm(forms.ModelForm):
    class Meta:
        model = MapSettings
        fields = ['name']
