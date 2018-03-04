from django import forms

from company_management.models import Company


class NewCompanyForm(forms.ModelForm):
    class Meta:
        model = Company
        fields = ['name']
