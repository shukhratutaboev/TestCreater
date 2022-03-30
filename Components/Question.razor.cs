using Markdig;
using Microsoft.AspNetCore.Components;
using TestCreater.Models;

namespace TestCreater.Components;
public partial class Question : ComponentBase
{
    [Parameter]
    public QuestionModel Model { get; set; }
    public string Preview(string text) => Markdown.ToHtml(text);
}