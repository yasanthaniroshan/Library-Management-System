import os
import django,csv

# Set up Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'LibraryManagementSystem.settings')
django.setup()


from LibManager.models import Book


with open("booklist.txt") as csvfile:
    for line in csvfile:
        name,author,genre,copies="","","",""
        if(line[0]=='"'):
            name = line.split(',')[0] + line.split(',')[1]
            author = line.split(',')[2] + line.split(',')[3]
            genre = line.split(',')[4] 
            copies = line.split(',')[5]
            
        else:
            name = line.split(',')[0]
            author = line.split(',')[1] + line.split(',')[2]
            genre = line.split(',')[3]
            copies = line.split(',')[4]

        if copies.isnumeric():  
            book = Book.objects.create(title=name,author=author,genre=genre,copies=copies)
            book.save()
            print(f"Book added - {name}")
        
        
            
