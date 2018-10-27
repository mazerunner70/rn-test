#!/usr/bin/env python
import random
mapping = {'R': 'Rock', 'P': 'Paper', 'S': 'Scissors'}
choice = ''
while choice == '':
  choice = raw_input('Enter (R)ock, (P)aper, or (S)scissors! ').upper()
  if choice not in ['R','P','S']:
    choice = ''
print 'You chose: ', mapping[choice]
computerChoice = random.choice(['R','P','S'])
print 'I chose: ', mapping[computerChoice]
winOptions = [['Draw!', ['RR','SS','PP']], ['You Win!', ['RS', 'SP', 'PR']] , ['I Win!', ['SR', 'PS', 'RP']]]
outcome = list(filter(lambda option: choice+computerChoice in option[1],winOptions))
print outcome[0][0]