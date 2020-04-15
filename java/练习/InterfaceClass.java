
public class InterfaceClass {
    public static void main(String[] args){
        Person p = new Student("小明");
        p.run();
        p.getName();
    }
}
interface Person {
    void run();
    String getName();
}
class Student implements Person{
    private String name;
    public Student(String name){
        this.name  =  name;
    }
    @Override
    public void run(){
        System.out.println("Student run");
    }
    @Override
    public String getName(){
        return this.name;
    }
}