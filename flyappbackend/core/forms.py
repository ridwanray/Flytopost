from django.db import models

class UserForm(forms.ModelForm):
    class Meta:
        models = User
        widgets = {
            'password': forms.PasswordInput(),
        }
