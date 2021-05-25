package com.company;

import java.lang.Integer;

public class Main {

    public static void main(String[] args) {
        int tea = 0;
        int candy = 0;
        int outcome = 0;
//        for(int i = 0; i < args.length; i++){
//            System.out.println(args[i]);

//        }
        tea = Integer.parseInt(args[0]);
        candy = Integer.parseInt(args[1]);

        System.out.println("tea: " + tea);
        System.out.println("candy: " + candy);
        System.out.println("outcome: " + teaPartyLogic(tea, candy));
//	    System.out.println("Hello Peter");
//	    System.out.println(addOne(11));
        // We are having a party with amounts of tea (int) and candy (int).
        // Return the int outcome of the party encoded as 0=bad, 1=good, or 2=great.

    }

//    public static int addOne(int num){
//        return num + 1;
//    }
    public static int teaPartyLogic(int tea, int candy){
        int outcome = 0;
        // A party is good (1) if both tea and candy are at least 5.
        if(tea >= 5 && candy >= 5){
//            outcome = 1;
            // However, if either tea or candy is at least double the amount of the other one, the party is great (2).
//            if(tea * 2 <= candy || candy * 2 <= tea){
//                outcome = 2;
//            }
            // condition ? valueIfTrue: valueIfFalse;
            outcome = tea * 2 <= candy || candy * 2 <= tea ? 2 : 1;
        }

        // However, in all cases, if either tea or candy is less than 5, the party is always bad (0).
//        if(tea < 5 || candy < 5){
//            outcome = 0;
//        }
        return outcome;
    }
}
