class Main{
    public static void main(String[] args){
        Person ming = new Person("小明",20);
        System.out.println(ming.getName());
        System.out.println(ming.getAge());
    }
}
class Person{
    private String name;
    private int age;
    public Person(String name,int age){
        this.name = name;
        this.age = age;
    }

    public String getName(){
        return this.name;
    }

    public int getAge(){
        return this.age;
    }
}