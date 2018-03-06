from django import forms

from . models import MLData


class NewDataSetForm(forms.ModelForm):
    class Meta:
        model = MLData
        fields = ['name', 'company']
