public class Main {
    public static void main(String[] args){
        Person ming = new Person(new String[]{"Homer","Simpson"});
        System.out.println(ming.getName());
    }
}
class Person {
     private String[] name;
     public Person(String[] name){
         this.name = name;
     }
     public String getName(){
         return this.name[0]+" "+this.name[1];
     }
     public void setName(String[] name){
         this.name = name;
     }

}