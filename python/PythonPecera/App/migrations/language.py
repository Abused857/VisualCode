import mysql.connector

import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from pepito.language_model import Language



def get_db_connection():
    return mysql.connector.connect(
        host='localhost',
        user='root',
        password='',
        database='pybeehub'
    )

def connect():
    conn = get_db_connection()
    cur = conn.cursor()

   
    cur.execute("DROP TABLE IF EXISTS languages")

   
    cur.execute("""
        CREATE TABLE languages (
            id BIGINT PRIMARY KEY,
            name VARCHAR(255) NULL,
            abbreviation VARCHAR(255) NULL,
            flag VARCHAR(255) NULL,
            `order` INT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            deleted_at TIMESTAMP NULL
        )
    """)
    conn.commit()

   
    languages = [
        {
            'id': 1,
            'name': 'spanish',
            'abbreviation': 'ES',
            'flag': 'spanish.gif',
            'order': 100,
        },
        {
            'id': 2,
            'name': 'english',
            'abbreviation': 'EN',
            'flag': 'english.gif',
            'order': 99
        },
    ]

    for lang in languages:
        insert(Language(lang['id'], lang['name'], lang['abbreviation'], lang['flag'], lang['order']))

    conn.close()

def insert(language):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("""
        INSERT INTO languages (id, name, abbreviation, flag, `order`)
        VALUES (%s, %s, %s, %s, %s)
    """, (
        language.id,
        language.name,
        language.abbreviation,
        language.flag,
        language.order
    ))
    conn.commit()
    conn.close()

if __name__ == "__main__":
    connect()
