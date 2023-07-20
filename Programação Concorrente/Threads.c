#include <stdio.h>
#include <unistd.h>

int main(int argc, char **argv)
{
  for (int i = 0; i < 2; i++){
    pid_t pid;
    pid = fork();
    
  }
  pid_t pid_filho_1, pid_filho_2;
  pid_t pid_neto_1_1, pid_neto_1_2, pid_neto_1_3, pid_neto_2_1, pid_neto_2_2, pid_neto_2_3;

  pid_filho_1 = fork();

  if (pid_filho_1 == 0)
  {
    printf("Processo filho [%d] criado\n", getpid());
    pid_neto_1_1 = fork();

    if (pid_neto_1_1 == 0)
    {
      printf("Processo neto %d, filho de (%d)\n", getpid(), getppid());
    }
    else
    {
      pid_neto_1_2 = fork();
      if (pid_neto_1_2 == 0)
      {
        printf("Processo neto %d, filho de (%d)\n", getpid(), getppid());
      }
      else
      {
        pid_neto_1_3 = fork();
        if (pid_neto_1_3 == 0)
        {
          printf("Processo neto %d, filho de (%d)\n", getpid(), getppid());
        }
        else
        {
          wait(NULL);
          sleep(5);
          printf("Processo %d finalizado\n", getpid());
        }
      }
    }
  }
  else
  {
    pid_filho_2 = fork();

    if (pid_filho_2 == 0)
    {
      printf("Processo filho [%d] criado\n", getpid());
      pid_neto_2_1 = fork();

      if (pid_neto_2_1 == 0)
      {
        printf("Processo neto %d, filho de [%d]\n", getpid(), getppid());
      }
      else
      {
        pid_neto_2_2 = fork();

        if (pid_neto_2_2 == 0)
        {
          printf("Processo neto %d, filho de [%d]\n", getpid(), getppid());
        }
        else
        {
          pid_neto_2_3 = fork();

          if (pid_neto_2_3 == 0)
          {
            printf("Processo neto %d, filho de [%d]\n", getpid(), getppid());
          }
          else
          {
            wait(NULL);
            sleep(5);
            printf("Processo %d finalizado\n", getpid());
          }
        }
      }
    }
    else
    {
      printf("Processo pai criou %d\n", getpid());
      wait(NULL);
      printf("Processo pai finalizado!\n");
    }
  }

  return 0;
}
