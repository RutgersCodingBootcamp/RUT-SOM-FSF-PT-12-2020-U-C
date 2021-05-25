public class MyClass {
    public static void main(String args[]) {
      System.out.println("Hello Peter!");
      int num = 0;
      boolean myNameIsAnthony = true;
      String testStr = "Anthony";
      double biggerNum = 11.1;
      float smallerNum = 1.1f;
    //   System.out.println(1 + num);
      for(int i = 0; i < 12; i++){
          System.out.println(i);
      }
      // print all even numbers up to 100
      for(int i = 0; i <= 100; i += 2){
          System.out.println(i);
      }
        for(int i = 0; i <= 50; i++){
            System.out.println(i*2);
        }
        // doubles i by bit shifting 1
        // 0000 0001 = 1
        // 0000 0010 = 2
        // 0000 0100 = 4
        // 0000 1000 = 8
        for(int i = 1; i <=50; i = i << 1){
            System.out.println(i);
        }
        for(int i = 64; i > 0; i = i >> 1){
            System.out.println(i);
        }
      // print every multiple of 5 up to 100
      for(int i = 5; i <= 100; i += 5){
          System.out.println(i);
      }
      for(int i = 1; i <= 20; i++){
          System.out.println(i*5);
      }
      for(int i = 1; i * 5 <= 100; i++){
          System.out.println(i*5);
      }
    }
}