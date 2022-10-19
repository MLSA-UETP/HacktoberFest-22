import 'dart:math';
import 'package:flutter/material.dart';

void main() {
  return runApp(
    MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.red,
        appBar: AppBar(
          title: Text('Dicee'),
          backgroundColor: Colors.red,
        ),
        body: _DicePage(),
      ),
    ),
  );
}
class _DicePage extends StatefulWidget {
  @override
  State<_DicePage> createState() => _DicePageState();
}

class _DicePageState extends State<_DicePage> {
  @override
  int leftdicenumber = 5;
  int rightdidcenumber= 1;
  void changeDiceFace()
  {
    setState(() {
      leftdicenumber=Random().nextInt(6)+1;
      rightdidcenumber=Random().nextInt(6)+1;
    });
  }
  Widget build(BuildContext context) {

    return Center(
      child: Row(
        children: [
          Expanded(
            child: FlatButton( //left button
                onPressed: () {
                  changeDiceFace();
                  if(leftdicenumber==rightdidcenumber){

                      print('you won');
                      showDialog(
                        context: context,
                        builder: (_) => AlertDialog(
                          title: Text('congratulations'),
                          content: Text(
                            'You win.!',
                          ),
                        ),
                      );
                    }
                },
                child: Image.asset('images/dice$leftdicenumber.png')),
          ),
          Expanded(
            child: FlatButton( //right button
                onPressed: () {
                  changeDiceFace();
                  if(rightdidcenumber==leftdicenumber)
                  {
                    print('you won');
                    showDialog(
                      context: context,
                      builder: (_) => AlertDialog(
                        title: Text('congratulations'),
                        content: Text(
                          'You win.!',
                        ),
                      ),
                    );
                  }
                },
                child: Image.asset('images/dice$rightdidcenumber.png')),
          )
        ],
      ),
    );
  }
}
