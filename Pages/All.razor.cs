using Microsoft.AspNetCore.Components;
using System.Text.Json;
using TestCreater.Models;

namespace TestCreater.Pages;
public partial class All
{
    public List<QuestionModel> Questions { get; set; } = new List<QuestionModel>();

    [Inject]
    public HttpClient Http { get; set; }
    protected override async Task OnInitializedAsync()
    {
        var json = await Http.GetStringAsync("https://script.googleusercontent.com/macros/echo?user_content_key=X29OsSo68xuZ9_dPvKwjBOy4O80pwFpHj67xy8BQh99ff16nuvUsMfxsE5TEUBZ6CTboky3GGNoxLLMUMxY5c0e1XZNa9j9im5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnB4wjZ1oHFX9OuiG-mY3GaizQxZhwhAYz4pf9J4OeeDk3TFqPgLJytE161ccsfznLKcR8G1K81HxeUDRSGjlxo8UDZ-CypomEg&lib=MerSE56bODSHPg4_u3Woa6E8G4nBBDVKd");
        Questions = JsonSerializer.Deserialize<List<QuestionModel>>(json);
        //StateHasChanged();
    }
}