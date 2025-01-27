import requests  # Biblioteca para realizar solicitudes HTTP
from bs4 import BeautifulSoup  # Biblioteca para analizar y extraer datos de HTML

def scrape_marca_news():
    # URL principal de la página que vamos a scrape
    url = "https://www.marca.com/"
    
    try:
        # Realizamos la solicitud HTTP a la página web
        response = requests.get(url)
        response.raise_for_status()  # Verifica si la solicitud fue exitosa (código 200)
        
        # Analizamos el contenido HTML de la página con BeautifulSoup
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Buscamos todas las etiquetas <a> que contienen la clase específica de los enlaces a noticias
        news_items = soup.find_all('a', class_='ue-c-cover-content__link')
        
        
        # Lista para almacenar las noticias extraídas
        news_list = []
        for item in news_items:
            # Dentro de cada enlace <a>, buscamos el <h2> con la clase del titular
            title_element = item.find('h2', class_='ue-c-cover-content__headline')
            
            # Extraemos el texto del título si existe; si no, asignamos "Sin título"
            title = title_element.get_text(strip=True) if title_element else 'Sin título'
            
            # Extraemos el enlace (href) del elemento <a>; si no existe, asignamos "Sin enlace"
            link = item['href'] if 'href' in item.attrs else 'Sin enlace'
            
            # Agregamos un diccionario con el título y el enlace a la lista de noticias
            news_list.append({'title': title, 'link': link})
        
        # Devolvemos la lista de noticias extraídas
        return news_list
    
    except requests.exceptions.RequestException as e:
        # Si ocurre un error en la solicitud, mostramos un mensaje de error
        print(f"Error al realizar la solicitud: {e}")
        return []

# Punto de entrada principal del script
if __name__ == "__main__":
    # Llamamos a la función para obtener las noticias
    noticias = scrape_marca_news()
    
    # Si se encontraron noticias, las mostramos en la consola
    if noticias:
        print("Últimas noticias de Marca:")
        for i, noticia in enumerate(noticias, start=1):
            print(f"{i}. {noticia['title']}")  # Imprimimos el número y el título de cada noticia
            print(f"   Enlace: {noticia['link']}")  # Imprimimos el enlace asociado
    else:
        # Si no se encontraron noticias, mostramos un mensaje de error
        print("No se encontraron noticias o hubo un problema con el scraping.")
