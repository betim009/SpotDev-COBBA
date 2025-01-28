import yt_dlp
import os

# pip install yt_dlp

# Função para baixar o áudio em MP3
def baixar_mp3(url, pasta_destino='.'):
    try:
        # Configurações do yt-dlp
        ydl_opts = {
            'format': 'bestaudio/best',  # Melhor qualidade de áudio disponível
            'postprocessors': [{
                'key': 'FFmpegExtractAudio',  # Extrai o áudio
                'preferredcodec': 'mp3',      # Formato MP3
                'preferredquality': '192',    # Qualidade do áudio
            }],
            'outtmpl': os.path.join(pasta_destino, '%(title)s.%(ext)s'),  # Caminho do arquivo
            'verbose': True,  # Exibe logs detalhados
        }

        # Baixa o áudio
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            print(f"Baixando e convertendo: {url}...")
            info = ydl.extract_info(url, download=True)
            titulo = info.get('title', 'audio')  # Obtém o título do vídeo
            print(f"Download concluído! Arquivo salvo em: {os.path.join(pasta_destino, titulo)}.mp3")
    except Exception as e:
        print(f"Ocorreu um erro: {e}")

# URL do vídeo do YouTube
url = "https://www.youtube.com/watch?v=b7Q73aidBbk&ab_channel=%C3%9CPlayMusic"  # Substitua pela URL do vídeo desejado

# Pasta de destino (opcional, padrão é a pasta atual)
pasta_destino = "./downloads"

# Cria a pasta de destino se ela não existir
if not os.path.exists(pasta_destino):
    os.makedirs(pasta_destino)

# Chama a função para baixar o MP3
baixar_mp3(url, pasta_destino)