## Biblioteki

- **styled-components** - dla prostszego stylizowania, theme'u oraz funkcjonalności sassowych bez potrzeby dodawkowego kroku w celu kompilowania z SCSS do CSS
- **react-router** - client-side routing
- **FontAwesome** - ikonki UI

## Uwagi

- Miałem w planach użycie Context API w celu obsługi state'u, ale uznałem, że nie będzie to potrzebne; dopiero przy odkryciu, że gatunki trzeba wyciągać osobnym API callem zorientowałem się, że lepiej byłoby rzeczywiście użyć Contextu, ale nie było czasu na refactor
- API TMDB nie umożliwia ustawianie rozmiaru strony, więc wyświetlam 20 filmów per strona i przenoszę paginację na sam dół
- Ograniczyłem liczbę gatunków do maksymalnie 3 w celu utrzymania badge'ów w jednej linijce
- API zwraca maksymalną liczbę stron osiągającą 32 tysiące, ale nie pozwala przejść dalej niż strona 500; w związku z tym lastPage jest hardcode'owany na 500
- "Twoje listy" są w figmie dość niezrozumiale umieszczone ponad stroną, w związku z czym pozwoliłem sobie zamienić menu na hamburger + dodawanie listy
- Funkcjonalność CxUD listy nie została wyszczególniona w wymaganiach, więc jej nie implementowałem, zostawiłem sam Read
- UI nigdzie nie wskazuje funkcjonalności wyszukiwania, wiec jej nie implementowałem
- Klucz API zazwyczaj przechowywany byłby na backendzie ze względów bezpieczeństwa; frontend zamiast bezpośrednio wywoływać API TMDB odwoływałby się do backendu w celu ukrycia klucza przed użytkownikiem
- W związku z ilością kodu przeniósłbym style do osobnego folderu, ale nie miałem na to czasu
- Cast & Crew przyciąłem do 5 pozycji