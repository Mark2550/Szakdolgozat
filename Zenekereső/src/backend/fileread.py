import os
from hashlib import sha256

def fingerprint(audio_path):
  """
  Extracts a fingerprint from an audio file.

  Args:
      audio_path: Path to the audio file.

  Returns:
      A string representing the SHA-256 hash of the first 1024 bytes of the audio data.
  """
  try:
    with open(audio_path, 'rb') as f:
      # Read the first 1024 bytes of the audio file
      data = f.read(1024)
      # Calculate the SHA-256 hash of the data
      return sha256(data).hexdigest()
  except FileNotFoundError:
    print(f"Error: File not found: {audio_path}")
    return None

def process_folder(folder_path):
  # Prints the filename and its fingerprint to the console.
  for filename in os.listdir(folder_path):
    # Check if it's a file and has a common audio extension
    if os.path.isfile(os.path.join(folder_path, filename)) and filename.lower().endswith(('.mp3', '.wav', '.flac')):
      audio_path = os.path.join(folder_path, filename)
      fingerprint_str = fingerprint(audio_path)
      if fingerprint_str:
        print(f"{filename}: {fingerprint_str}")

def main():

  path = 'C:\\Users\\Márk\\Documents\\Szakdoga\\szakdoga_newer\\vite-project\\src\\backend\\audio_folder'
  if os.path.isdir(path):
    process_folder(path)
  else:
    fingerprint_str = fingerprint(path)
    if fingerprint_str:
      print(f"{os.path.basename(path)}: {fingerprint_str}")

if __name__ == "__main__":
  main()
