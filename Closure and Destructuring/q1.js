<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Counter Application</title>
</head>
<body>
    <h1>Counter Application</h1>
    <div id="counter">0</div>
    <button id="increment">Increment</button>
    <button id="decrement">Decrement</button>

    <script>
        // Closure to create a private counter
        function createCounter() {
            let count = 0;

            return {
                increment: function() {
                    count++;
                    return count;
                },
                decrement: function() {
                    count--;
                    return count;
                },
                getCount: function() {
                    return count;
                }
            };
        }

        const counter = createCounter();

        document.getElementById('increment').addEventListener('click', function() {
            document.getElementById('counter').innerText = counter.increment();
        });

        document.getElementById('decrement').addEventListener('click', function() {
            document.getElementById('counter').innerText = counter.decrement();
        });
    </script>
</body>
</html>
