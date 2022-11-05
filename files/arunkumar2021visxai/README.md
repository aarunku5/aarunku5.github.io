

# A Visual Exploration of Fair Evaluation for Machine Learning 
***Bridging the Gap Between Research and the Real World***

A common complaint from industry over the years has been that models selected based on their success in 
existing datasets do not do well when deployed in real world applications. Questions which have remained 
unexplored over the years are: Are our leaderboards doing fair evaluation? Can we revamp our leaderboards 
in a way that can help industries select a 'better' model according to their requirements? In order to 
assist users in selecting the model best suited for their applications, we present an interactive tool 
that: (i) illustrates a task-agnostic method for probing leaderboards to find out whether a model is 
dominating leaderboards just by solving `easy’ questions, (ii) explains three new metrics proposed to 
customize leaderboard evaluation based on the application area of the end user, (iii) educates user about 
the design of weights in these metrics by visualizing change in model ranking based on customization.

## Launch

Download repo and launch a local http server in terminal.

```bash
python -m http.server 8000
```

Open a web browser (Firefox is recommended), and in the search bar, navigate to:

```bash
localhost:8000/<path to your saved location>
```
