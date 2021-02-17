//Класс с функцией генерации случайного числа
export class NumberGenerator {
    static randomInteger(min, max) {
        return Math.floor(min + Math.random() * (max + 1 - min));
    }
}