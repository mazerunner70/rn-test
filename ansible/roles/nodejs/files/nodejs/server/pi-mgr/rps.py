#!/usr/bin/env python
import random
humanWins = ['RS', 'SP', 'PR']
mapping = {'R': 'Rock', 'P': 'Paper', 'S': 'Scissors'}
choice = ''
while choice == '':
  choice = raw_input('Enter (R)ock, (P)aper, or (S)scissors! ').upper()
  if choice not in ['R','P','S']:
    choice = ''
print 'You chose: ', mapping[choice]
computerChoice = random.choice(['R','P','S'])
print 'I chose: ', mapping[computerChoice]
if choice == computerChoice:
  print "Draw!"
elif choice+computerChoice in humanWins:
  print "You win!"
else:
  print "I win!"