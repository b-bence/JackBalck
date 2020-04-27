from backend.entities import Entity
from backend import Deck


class Dealer(metaclass=Entity):

    def __init__(self):
        pass

    def turn(self):
        print(self.hand)
        pass

    def deal(self, player):
        pass

    def hit(self):
        pass

    def flipCard(self):
        pass

    def askTurn(self):
        pass
