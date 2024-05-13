import os
from hashlib import sha256

def fingerprint(audio_path):
  """
  Return: string representing the SHA-256 hash of the first 1024 bytes of the audio data.
  """
  try:
    with open(audio_path, 'rb') as f:
      # Read the first 1024 bytes
      data = f.read(1024)
      # Calculate the SHA-256 hash
      return sha256(data).hexdigest()
  except FileNotFoundError:
    print(f"Error: File not found: {audio_path}")
    return None

def main():

  path = 'C:\\Users\\Márk\\Documents\\Szakdoga\\szakdoga_newer\\vite-project\\src\\data\\'
  fingerprint_str = fingerprint(path)
  if fingerprint_str:
    print(f"{os.path.basename(path)}: {fingerprint_str}")

if __name__ == "__main__":
  main()
