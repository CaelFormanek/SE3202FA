import random
import sqlite3
import csv

print("")

# connect to database
conn = sqlite3.connect('./UsersDB.db')

# cursor allows python to execute SQL statements
mycursor = conn.cursor()

# create Student table
mycursor.execute("CREATE TABLE IF NOT EXISTS Users (Username TEXT PRIMARY KEY, Password TEXT)")
conn.commit()


# function to handle query results
def handleQuery(query):
    size = 0
    for object in query:
        size += 1
        print(object)
    if size < 1:
        print("No objects with this criteria exist.")
        return

# function to add a user
def addUser(Username, Password):
    mycursor.execute("INSERT INTO Users('Username', 'Password') VALUES (?, ?)", (Username, Password,))
    conn.commit()
    print("Insertion complete.")

# function to update user
def updateUser(oldUsername, oldPassword, newUsername, newPassword):
    mycursor.execute("UPDATE Users SET Username = ?, Password= ? WHERE Username = ? AND Password = ?", (newUsername, newPassword,oldUsername, oldPassword,))
    print("Update complete.")
    conn.commit()

# delete a user
def deleteUser(Username, Password):
    mycursor.execute("DELETE FROM Users WHERE Username = ? AND Password = ?",
                     (Username, Password,))
    print("Delete complete.")
    conn.commit()

# display by Username
def displayUsers():
    query = mycursor.execute("SELECT * FROM USERS")
    handleQuery(query)

# controls flow of user operations
def controlFlow():
    while 5:
        print("")
        print("Type 1 to add a new student")
        print("Type 2 to update a student")
        print("Type 3 to delete a student")
        print("Type 4 to display students")
        print("Type 5 to exit application")
        print("")

        selection = ""

        # check to see if selection is valid
        while 5:
            selection = input("Select option: ")
            try:
                selection = int(selection)
            except:
                print("Cannot convert " + selection + " to int.")
                print("Try again")
                continue
            break

        if (selection == 1):
            addUser("Example Username", "Example Password")
            addUser("Example Username 2", "Example Password 2")
        elif (selection == 2):
            updateUser("Example Username 2", "Example Password 2", "Updated Username", "Updated Password")
        elif (selection == 3):
            deleteUser("Updated Username", "Updated Password")
        elif (selection == 4):
            displayUsers()
        elif (selection == 5):
            print("Exiting application. Bye!")
            mycursor.close()
            return
        else:
            print("Invalid option.")
            print("Try again")
            continue
    return


# controlFlow() function will run the program
controlFlow()