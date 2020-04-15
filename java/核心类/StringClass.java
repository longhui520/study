import java.util.Arrays;

public class StringClass {
    public static void main(String[] args) {
      String s1 = "hello";
      String s2 = "HELLO".toLowerCase();
      System.out.println(s1 == s2);
      System.out.println(s1.equals(s2));
      System.out.println(s1.indexOf('l'));
      System.out.println(s1.lastIndexOf('l'));
      System.out.println(s1.substring(2));
      System.out.println("\tHello\r\n".trim());
      System.out.println("".isEmpty());
      System.out.println(s1.replace('l', 'w'));
      String s3 = "A,,B;C ,D";
      System.out.println(s3.replaceAll("[\\,\\;\\s]+",","));
      String s4 = "A,B,C,D";
      System.out.println(Arrays.toString(s4.split("//,")));
      String[] arr = {"A","B","C"};
      System.out.println(String.join("***", arr));
      System.out.println(String.valueOf(123));
      System.out.println(String.valueOf(true));
      System.out.println(Integer.parseInt("123"));
      System.out.println(Integer.parseInt("ff",16));
      System.out.println(Boolean.parseBoolean("true"));
      System.out.println(Boolean.parseBoolean("false"));
      System.out.println(Boolean.parseBoolean("TRUE"));
      System.out.println(Boolean.parseBoolean("FALSE"));
      System.out.println(Boolean.parseBoolean("11"));
      System.out.println(Boolean.parseBoolean("True"));
      System.out.println(Integer.getInteger("java.version"));
    }
}