from django.db import models
from django.core.validators import MaxValueValidator


# Create your models here.
class Contact(models.Model):
    name =  models.CharField(max_length=150)
    email = models.EmailField()
    message = models.TextField()


    def __str__(self) -> str:
        return self.name




class UserProfile(models.Model):
    birthday = models.DateField()
    website = models.URLField()
    age = models.PositiveIntegerField()
    freelance = models.CharField(max_length=50)
    phone = models.CharField(max_length=20)
    city = models.CharField(max_length=100)
    degree = models.CharField(max_length=100)
    email = models.EmailField()
    description = models.TextField()
    additional_info = models.TextField()

    def __str__(self):
        return self.email

class client(models.Model):
    
    happy_client = models.PositiveIntegerField()
    projects = models.PositiveIntegerField()
    hour_support = models.PositiveIntegerField()
    awards = models.PositiveIntegerField()
    
    def __int__(self):
        return self.happy_client




class Skill(models.Model):
    name = models.CharField(max_length=100)
    percentage = models.PositiveIntegerField(validators=[MaxValueValidator(100)])

    def __str__(self):
        return self.name




class Testimonilas(models.Model):
    name = models.CharField(max_length=100)
    post = models.CharField(max_length=100)
    message=models.TextField()
    image=models.FileField(upload_to="testimonails/",max_length=255,null=True)
    

    def __str__(self):
        return self.name

class Education(models.Model):
    edu_name=models.CharField(max_length=150)
    years=models.CharField(max_length=150)
    school=models.CharField(max_length=255)
    desc=models.TextField()

    
    def __str__(self):
        return self.school
   







