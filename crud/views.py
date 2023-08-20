from django.shortcuts import render,redirect
from django .http import HttpResponse
# from Portfolio.settings import EMAIL_HOST_USER 
from django.core.mail import EmailMessage
from django.template.loader import render_to_string
from .models import UserProfile,client, Skill, Testimonilas,Education,Intrest,Summary_info,service
# from .forms import ContactForm
# Create your views here.




def home(request):
    info = UserProfile.objects.all()
    count = client.objects.all()
    skills=Skill.objects.all()
    test=Testimonilas.objects.all()
    education=Education.objects.all()
    intrest=Intrest.objects.all()
    summary=Summary_info.objects.all()
    serv=service.objects.all()
    context = {'info': info,'client': count, 'skills':skills,'test':test,'education':education, 'intrest':intrest,'summary':summary,'serv':serv}

    return render(request, "index.html", context)


# def about(request):
#     client = client.objects.all()
#     print(client) 
#     return render(request, "index.html", {'client': client})
    
# def resume(request):
#     return render(request,"crud/resume.html")
# def contact(request):
#     return render(request,"crud/contact.html")
# def portfolio(request):
#     return render(request,"crud/portfolio.html")
# def service(request):
#     return render(request,"crud/service.html")

# def contact(request):
#     if request.method == "POST":
#         name = request.POST.get("name")
#         email = request.POST.get("email")
#         message = request.POST.get("message")
#         subject= request.POST.get("subject")
#         recipient="roshustha10@gmail.com",
#         html_content=render_to_string('templates/email.html',{'name':name,'description':message,'mail':email})
#         email=EmailMessage(
#                subject,
#                html_content,
#                EMAIL_HOST_USER,
#                recipient
#            )
#         email.fail_silently=False
#         if email!=None:
#                email.send()

#         crud = Contact(
#             name = name,
#             email= email,
#             message = message,
#             subject=subject
#         )
#         crud.save()
#         print(name)
#         return redirect("templates:home")


#     return render(request,"base.html")

